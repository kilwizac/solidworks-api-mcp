---
type: property
interface: ICallout
member: TextColor
returns: System.Int32
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
  - ICallout.OpaqueColor
keywords:
  - textcolor
  - icallout
  - callout
  - text
  - color
  - row
  - id
  - int32
  - create
  - multi
  - callouts
  - vba
readonly: null
---

# ICallout.TextColor

Gets or sets the color of the text in the specified row in this callout.

## Signature

```csharp
System.Int32 TextColor( 
   System.Int32
RowID
) {get; set;}
```
## Parameters

- `RowID` (System.Int32): Row in callout

## Return Value

System color

## Remarks

You must use a system color; you cannot use any other RGB values. To see system colors, click
Tools >
Options >
Colors
in the SOLIDWORKS Design user interface.

## Examples

- Create Multi-row Callouts (VBA) (Create_Multi-row_Callouts_Example_VB.htm)

## See Also

- `ICallout.OpaqueColor`