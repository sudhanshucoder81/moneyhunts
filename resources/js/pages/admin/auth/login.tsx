import { Form, Head, Link } from '@inertiajs/react';
import InputError from '@/components/input-error';
import PasswordInput from '@/components/password-input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';

type Props = {
    status?: string;
    canResetPassword?: boolean;
};

export default function AdminLogin({
    status,
    canResetPassword = false,
}: Props) {
    return (
        <>
            <Head title="Admin Login" />

            <Form
                action="/admin/login"
                method="post"
                resetOnSuccess={['password']}
                className="flex flex-col gap-6"
            >
                {({ processing, errors }) => (
                    <>
                        <div className="grid gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="email">Email Address</Label>

                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    autoFocus
                                    placeholder="admin@example.com"
                                />

                                <InputError message={errors.email} />
                            </div>

                            <div className="grid gap-2">
                                <div className="flex items-center justify-between">
                                    <Label htmlFor="password">
                                        Password
                                    </Label>

                                    {canResetPassword && (
                                        <Link
                                            href="/admin/forgot-password"
                                            className="text-sm text-primary hover:underline"
                                        >
                                            Forgot Password?
                                        </Link>
                                    )}
                                </div>

                                <PasswordInput
                                    id="password"
                                    name="password"
                                    required
                                    placeholder="Password"
                                />

                                <InputError message={errors.password} />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="remember"
                                    name="remember"
                                />

                                <Label htmlFor="remember">
                                    Remember Me
                                </Label>
                            </div>

                            <Button
                                type="submit"
                                className="w-full"
                                disabled={processing}
                            >
                                {processing && <Spinner />}
                                Login to Admin Panel
                            </Button>
                        </div>

                        <div className="text-center text-sm">
                            <Link
                                href="/"
                                className="text-primary hover:underline"
                            >
                                ← Back to Website
                            </Link>
                        </div>

                        {status && (
                            <div className="text-center text-sm font-medium text-green-600">
                                {status}
                            </div>
                        )}
                    </>
                )}
            </Form>
        </>
    );
}

AdminLogin.layout = {
    title: 'Admin Login',
    description: 'Enter your admin credentials to continue.',
};