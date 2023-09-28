import MainLayout from "../../layout/MainLayout";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FunctionComponent<IDashboardLayoutProps> = ({
  children,
}) => {
  return <MainLayout>{children}</MainLayout>;
};

export default DashboardLayout;