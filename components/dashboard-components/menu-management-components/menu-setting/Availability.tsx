"use client"

import * as React from "react"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import dayjs from "dayjs"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

// Utility function to combine class names conditionally
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Availability() {
  const [currentTime, setCurrentTime] = React.useState<Date>(new Date())  // State to track the current time
  
  // State to manage selected date range
  const [dateRange, setDateRange] = React.useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(),
    to: dayjs(new Date()).add(1, 'day').toDate() // Default range is today to tomorrow
  })
  
  const [isAllDay, setIsAllDay] = React.useState(false)  // State to manage "All Day" toggle

  // Effect to update current time every second
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)  // Cleanup the timer on component unmount
    }
  }, [])

  // Format the current time to display in a readable format
  const formatCurrentTime = (date: Date) => {
    return dayjs(date).format("dddd, MMMM D YYYY, HH:mm:ss")
  }

  // Format a date for display
  const formatDate = (date: Date | undefined) => {
    return date ? dayjs(date).format("DD/MM/YYYY") : ""
  }

  // Handle date range selection from the calendar component
  const handleDateRangeSelect = (range: { from?: Date; to?: Date } | undefined) => {
    setDateRange({ from: range?.from ?? undefined, to: range?.to ?? undefined });
  }

  return (
    <div className="my-5">
      <RadioGroup defaultValue="always">
        <div className="flex flex-col space-x-2">
          <div className="flex gap-x-3 items-center">
            <RadioGroupItem value="always" id="always" />
            <Label htmlFor="always">Always</Label>
          </div>
          <div className="text-xs text-gray-500 my-4">
            <p>The menu will be shown</p>
          </div>
        </div>

        <div className="flex flex-col">
            <div className="flex items-center gap-x-3">
                <RadioGroupItem value="specific-dates-and-times" id="specific-dates-and-times" />
                <Label htmlFor="specific-dates-and-times">Specific Dates & Times</Label>
            </div>
          <div className="flex flex-col">
            <div className="space-y-4">
              <div className="text-xs text-gray-500 my-4 ml-2">
                <p>The menu will be visible between specific dates.</p>
              </div>

              {/* Display the current time */}
              <div className="text-sm text-gray-500">
                Current Time: {formatCurrentTime(currentTime)}
              </div>

              {/* Popover with Calendar to select date range */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-[300px] justify-start text-left font-normal",
                      !dateRange?.from ? "text-muted-foreground" : ""
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateRange?.from ? (
                      dateRange.to ? (
                        <>
                          {formatDate(dateRange.from)} - {formatDate(dateRange.to)}
                        </>
                      ) : (
                        formatDate(dateRange.from)
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    initialFocus
                    mode="range"
                    defaultMonth={dateRange?.from}
                    selected={dateRange}
                    onSelect={handleDateRangeSelect}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>

              {/* Toggle for "All Day" option */}
              <div className="flex items-center space-x-2">
                <Switch
                  id="all-day"
                  checked={isAllDay}
                  onCheckedChange={setIsAllDay}
                />
                <Label htmlFor="all-day">All Day</Label>
              </div>
            </div>
          </div>
        </div>
      </RadioGroup>
    </div>
  )
}
