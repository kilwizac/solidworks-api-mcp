---
type: property
interface: ICallout
member: Label2
returns: System.String
parameters:
  -
    name: RowID
    type: System.Int32
    description: Row for label
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICallout.SkipColon
keywords:
  - label2
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

# ICallout.Label2

Gets or sets the text for the label in the specified row of this callout.

## Signature

```csharp
System.String Label2( 
   System.Int32
RowID
) {get; set;}
```
## Parameters

- `RowID` (System.Int32): Row for label

## Return Value

Text for label

## Examples

- Create Multi-row Callouts (VBA) (Create_Multi-row_Callouts_Example_VB.htm)
- Create a Callout Independent of a Selection (C#) (Create_a_Callout_Independent_of_a_Selection_Example_CSharp.htm)
- Create a Callout Independent of a Selection (VB.NET) (Create_a_Callout_Independent_of_a_Selection_Example_VBNET.htm)
- Create a Callout Independent of a Selection (VBA) (Create_a_Callout_Independent_of_a_Selection_Example_VB.htm)

## See Also

- `ICallout.SkipColon`