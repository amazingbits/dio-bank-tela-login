import React from "react";
import {
  Box,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import LoginButton from "./LoginButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { doLogin } from "../services/Login";

const LoginFormSchema = yup.object().shape({
  email: yup
    .string()
    .email("Insira um e-mail válido")
    .required("Este campo é obrigatório"),
  password: yup
    .string()
    .required("Este campo é obrigatório")
    .min(4, "Insira no mínimo 4 caracteres"),
});

const LoginCard = () => {
  const [sending, setSending] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(LoginFormSchema),
    mode: "all",
  });

  const handleLoginForm = (data: unknown) => {
    setSending(true);
    setTimeout(() => {
      setSending(false);
      console.log(data);
      doLogin();
      reset();
    }, 2000);
  };

  return (
    <Container padding={16} centerContent>
      <Box maxW="sm">
        <form onSubmit={handleSubmit(handleLoginForm)}>
          <FormControl isInvalid={errors.email ? true : false}>
            <FormLabel>E-mail</FormLabel>
            <Input
              variant="flushed"
              placeholder="E-mail"
              autoFocus
              {...register("email")}
            />
            {errors.email?.message && (
              <FormErrorMessage>{errors.email.message}</FormErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={errors.password ? true : false} marginTop={6}>
            <FormLabel>Senha</FormLabel>
            <Input
              variant="flushed"
              placeholder="Senha"
              type="password"
              {...register("password")}
            />
            {errors.password?.message && (
              <FormErrorMessage>{errors.password.message}</FormErrorMessage>
            )}
          </FormControl>
          <LoginButton isDisabled={!isValid} isLoading={sending} type="submit">
            Logar
          </LoginButton>
        </form>
      </Box>
    </Container>
  );
};

export default LoginCard;
