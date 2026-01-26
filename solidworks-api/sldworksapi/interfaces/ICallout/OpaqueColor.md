---
type: property
interface: ICallout
member: OpaqueColor
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICallout.TextColor
keywords:
  - opaquecolor
  - icallout
  - callout
  - opaque
  - color
  - int32
  - create
  - multi
  - row
  - callouts
  - vba
readonly: null
---

# ICallout.OpaqueColor

Gets or sets the opaque (background) color for the labels for this callout.

## Signature

```csharp
System.Int32 OpaqueColor {get; set;}
```
## Parameters

None.

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

- `ICallout.TextColor`