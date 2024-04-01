import { Flex } from '@mantine/core';  
import { DateInput } from '@mantine/dates'; 
import React, { useState } from 'react';
import { IconCalendarEvent } from '@tabler/icons-react';


export default function Datetime() {

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleStartDateChange = (value) => {
        setStartDate(value);
    };

    const handleEndDateChange = (value) => {
        if (startDate && value < startDate) {
            alert('End date cannot be before start date');
            return;
        }
        setEndDate(value);
    };
    return (
        <Flex justify="space-between">
            <DateInput
                rightSection={<IconCalendarEvent />}
                valueFormat="DD/MM/YYYY"
                label="Start date"
                placeholder="3/26/2024"
                size="sm"
                value={startDate}
                onChange={handleStartDateChange}
            />
            <DateInput
                rightSection={<IconCalendarEvent />}
                valueFormat="DD/MM/YYYY"
                label="End date"
                placeholder="3/26/2024"
                size="sm"
                value={endDate}
                onChange={handleEndDateChange}
                minDate={startDate}
            />
        </Flex>
    );
}

