---
type: method
interface: IDesignTable
member: SetEntryText
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
    name: TextIn
    type: System.String
    description: Text value for entry
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IDesignTable.GetEntryText
  - IDesignTable.GetEntryValue
  - IDesignTable.SetEntryValue
keywords:
  - setentrytext
  - idesigntable
  - design
  - table
  - entry
  - text
  - row
  - int32
  - col
  - string
  - void
---

# IDesignTable.SetEntryText

Sets the text value of the specified entry.

## Signature

```csharp
void SetEntryText( 
   System.Int32
Row
,
   System.Int32
Col
,
   System.String
TextIn
)
```
## Parameters

- `Row` (System.Int32): Row number
- `Col` (System.Int32): Column number
- `TextIn` (System.String): Text value for entry

## Return Value

Unknown.

## See Also

- `IDesignTable.GetEntryText`
- `IDesignTable.GetEntryValue`
- `IDesignTable.SetEntryValue`