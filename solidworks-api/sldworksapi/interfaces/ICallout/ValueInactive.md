---
type: property
interface: ICallout
member: ValueInactive
returns: System.Boolean
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
  - ICallout.Value
keywords:
  - valueinactive
  - icallout
  - callout
  - value
  - inactive
  - row
  - id
  - int32
  - boolean
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

# ICallout.ValueInactive

Gets or sets whether the user can edit the value in the specified row in this callout.

## Signature

```csharp
System.Boolean ValueInactive( 
   System.Int32
RowID
) {get; set;}
```
## Parameters

- `RowID` (System.Int32): Row in callout

## Return Value

True if the value in this row cannot be modified, false if it can

## Examples

- Create Multi-row Callouts (VBA) (Create_Multi-row_Callouts_Example_VB.htm)
- Create a Callout Independent of a Selection (VBA) (Create_a_Callout_Independent_of_a_Selection_Example_VB.htm)
- Create a Callout Independent of a Selection (VB.NET) (Create_a_Callout_Independent_of_a_Selection_Example_VBNET.htm)
- Create a Callout Independent of a Selection (C#) (Create_a_Callout_Independent_of_a_Selection_Example_CSharp.htm)

## See Also

- `ICallout.Value`