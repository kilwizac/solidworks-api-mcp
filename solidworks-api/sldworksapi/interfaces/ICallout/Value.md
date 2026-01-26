---
type: property
interface: ICallout
member: Value
returns: System.String
parameters:
  -
    name: RowID
    type: System.Int32
    description: Row in callout
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICallout.TextColor
  - ICallout.ValueInactive
keywords:
  - value
  - icallout
  - callout
  - row
  - id
  - int32
  - string
  - create
  - multi
  - callouts
  - vba
  - independent
  - selection
  - vb
  - net
readonly: null
---

# ICallout.Value

Gets or sets the value in for the specified row in this callout.

## Signature

```csharp
System.String Value( 
   System.Int32
RowID
) {get; set;}
```
## Parameters

- `RowID` (System.Int32): Row in callout

## Return Value

Value

## Examples

- Create Multi-row Callouts (VBA) (Create_Multi-row_Callouts_Example_VB.htm)
- Create a Callout Independent of a Selection (C#) (Create_a_Callout_Independent_of_a_Selection_Example_CSharp.htm)
- Create a Callout Independent of a Selection (VB.NET) (Create_a_Callout_Independent_of_a_Selection_Example_VBNET.htm)
- Create a Callout Independent of a Selection (VBA) (Create_a_Callout_Independent_of_a_Selection_Example_VB.htm)

## See Also

- `ICallout.TextColor`
- `ICallout.ValueInactive`