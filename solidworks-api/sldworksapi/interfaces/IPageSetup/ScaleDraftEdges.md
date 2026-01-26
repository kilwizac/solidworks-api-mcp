---
type: property
interface: IPageSetup
member: ScaleDraftEdges
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - scaledraftedges
  - ipagesetup
  - page
  - setup
  - scale
  - draft
  - edges
  - boolean
  - whether
  - scaled
  - printed
  - drawing
  - vb
  - net
  - vba
readonly: null
---

# IPageSetup.ScaleDraftEdges

Gets or sets whether to scale draft edges when printing a drawing in high quality.

## Signature

```csharp
System.Boolean ScaleDraftEdges {get; set;}
```
## Parameters

None.

## Return Value

True to scale draft edges when printing a drawing in high quality, false to not

## Remarks

This property is only valid when
IPageSetup::HighQuality
is set to true.

## Examples

- Get Whether Draft Edges Scaled in Printed Drawing (C#) (Get_Whether_Draft_Edges_Scaled_in_Printed_Drawing_Example_CSharp.htm)
- Get Whether Draft Edges Scaled in Printed Drawing (VB.NET) (Get_Whether_Draft_Edges_Scaled_in_Printed_Drawing_Example_VBNET.htm)
- Get Whether Draft Edges Scaled in Printed Drawing (VBA) (Get_Whether_Draft_Edges_Scaled_in_Printed_Drawing_Example_VB.htm)