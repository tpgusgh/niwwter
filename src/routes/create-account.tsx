import  styled  from "styled-components";

const Wrapper = styled.div``;

const Form = styled.form``; 

const Input = styled.input``;

export default function CreateAccount() {
    const [isLoading, setLoading] = useSate(false);
    const [name, setName] = use
    return (
        <Wrapper>
            <Title>log into ❌</Title>
            <Form>
                <Input name="name" placeholder="Name" type="text" required />
                <Input name="email" placeholder="Email" type="email" required />
                <Input name="password" placeholder="Password" type="password" required />
                <Input type="submit" value="Create Account" />
            </Form>
        </Wrapper>
    );
}
