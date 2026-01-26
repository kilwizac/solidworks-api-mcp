---
type: property
interface: IRenderMaterial
member: BumpDetail
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - bumpdetail
  - irendermaterial
  - render
  - material
  - bump
  - detail
  - int32
readonly: null
---

# IRenderMaterial.BumpDetail

Gets or sets the level of granularity for any surface finish for this appearance.

## Signature

```csharp
System.Int32 BumpDetail {get; set;}
```
## Parameters

None.

## Return Value

Level of granularity

## Remarks

This property is only available when Casting, Rough, Chips, Circular or Rough/Smooth is selected for the
surface finish
.
When set to high detail, individual surface elements appear in sharp focus; when set to low detail, surface elements appear in soft focus.