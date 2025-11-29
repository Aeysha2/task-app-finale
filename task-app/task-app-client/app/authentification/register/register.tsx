import { Input } from "../components/input";
import { Button } from "../components/button";
import { Form } from "../components/form";
import { FormTitle } from "../components/formTitle";
export const Register = () => {
  return (
    <Form>
      <div className="space-y-4" >
        <FormTitle title="Create Account" />
        <Input label="Firsname" type="text" />
        <Input label="Lastname" type="text" />
        <Input label="Email" type="email" />
        <Input label="Password" type="password" />
        <Input label="Confirm password" type="password" />
        <Button title="Create Account" />
      </div>
    </Form>
  );
}