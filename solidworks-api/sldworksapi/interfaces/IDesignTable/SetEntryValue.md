---
type: method
interface: IDesignTable
member: SetEntryValue
returns: void
parameters:
  -
    name: Row
    type: System.Int32
    description: Row number
  -
    name: Col
    type: System.Int32
    description: Column number
  -
    name: IsText
    type: System.Boolean
    description: True for text, false for general
  -
    name: Retval
    type: System.String
    description: Value of the specific cell
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.GetEntryText
  - IDesignTable.GetEntryValue
  - IDesignTable.SetEntryText
keywords:
  - setentryvalue
  - idesigntable
  - design
  - table
  - entry
  - value
  - row
  - int32
  - col
  - text
  - boolean
  - retval
  - string
  - void
---

# IDesignTable.SetEntryValue

Sets the data type and value in the specified cell.

## Signature

```csharp
void SetEntryValue( 
   System.Int32
Row
,
   System.Int32
Col
,
   System.Boolean
IsText
,
   System.String
Retval
)
```
## Parameters

- `Row` (System.Int32): Row number
- `Col` (System.Int32): Column number
- `IsText` (System.Boolean): True for text, false for general
- `Retval` (System.String): Value of the specific cell

## Return Value

Unknown.

## Remarks

This method lets you change the data type from text to general and from general to text and specify a value.

## See Also

- `IDesignTable.GetEntryText`
- `IDesignTable.GetEntryValue`
- `IDesignTable.SetEntryText`