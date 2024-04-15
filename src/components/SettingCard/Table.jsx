import { Table, Flex, Input, Button, Skeleton } from "@mantine/core";
import Empty from "../Empty";
import { IconSearch } from "@tabler/icons-react";
import appStrings from "../../utils/strings";

export default function TableSettingCard({
  data = [],
  loading = false,
  disableActions = false,
}) {
  const tableData = {
    head: [
      appStrings.language.setting.member.member,
      appStrings.language.setting.member.email,
      appStrings.language.setting.member.role,
      appStrings.language.setting.member.actions,
    ],
    body: data,
  };
  return (
    <Flex direction="column" gap="md">
      <Flex justify="space-between">
        {!loading ? (
          <Input
            placeholder="Search"
            leftSection={<IconSearch size="1rem" />}
          />
        ) : (
          <Skeleton width={300} height={36} />
        )}
        {!disableActions ? (
          !loading ? (
            <Button>{appStrings.language.setting.member.add}</Button>
          ) : (
            <Skeleton width={100} height={36} />
          )
        ) : null}
      </Flex>
      {!loading ? (
        <Table
          stickyHeader
          stickyHeaderOffset={60}
          verticalSpacing="md"
          data={tableData}
        />
      ) : (
        <Skeleton height={300} />
      )}
      {!loading && !data?.length ? <Empty /> : null}
    </Flex>
  );
}
