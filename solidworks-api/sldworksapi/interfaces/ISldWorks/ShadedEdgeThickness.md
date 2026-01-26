---
type: property
interface: ISldWorks
member: ShadedEdgeThickness
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - geometry
  - ui
related: []
keywords:
  - shadededgethickness
  - isldworks
  - sld
  - works
  - shaded
  - edge
  - thickness
  - int32
readonly: null
---

# ISldWorks.ShadedEdgeThickness

Gets or sets the edge thickness when the display style is "Shaded with Edges".

## Signature

```csharp
System.Int32 ShadedEdgeThickness {get; set;}
```
## Parameters

None.

## Return Value

Edge thickness

## Remarks

This property is valid only when the Render system is turned on. To turn on the Render system, select
Tools > Options > System Options > Performance > Enhanced graphics performance (requires SOLIDWORKS restart)
.
The set value of this property cannot exceed 6.