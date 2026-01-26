---
type: property
interface: IDecal
member: DecalID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - decalid
  - idecal
  - decal
  - id
  - int32
readonly: true
---

# IDecal.DecalID

Gets the SOLIDWORKS decal ID.

## Signature

```csharp
System.Int32 DecalID {get;}
```
## Parameters

None.

## Return Value

SOLIDWORKS decal ID (index number)

## Remarks

By default, decal IDs are persistent, which means if three decals (IDs 1, 2, and 3) were applied to the model, and you
removed decal
ID 2, then the remaining decal IDs are 1 and 3.