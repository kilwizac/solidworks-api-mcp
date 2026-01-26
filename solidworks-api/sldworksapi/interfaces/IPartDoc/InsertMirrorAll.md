---
type: method
interface: IPartDoc
member: InsertMirrorAll
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - parts
  - ui
related:
  - IFeatureManager.InsertMirrorFeature
  - IPartDoc.MirrorFeature
  - IPartDoc.MirrorPart
keywords:
  - mirror
  - parts
  - see
  - also
  - ipartdoc
  - insertmirrorall
  - part
  - doc
  - insert
  - all
  - boolean
---

# IPartDoc.InsertMirrorAll

Mirrors the part about a selected planar face.

## Signature

```csharp
System.Boolean InsertMirrorAll()
```
## Parameters

None.

## Return Value

True if the feature is successfully created, false if not

## Remarks

This method returns a True or false to indicate whether or not the mirror-all feature was created. If it is successful, the newly created feature remains selected after the method runs. You can use
ISelectionMgr::GetSelectedObject6
to retrieve this object.

## See Also

- `IFeatureManager.InsertMirrorFeature`
- `IPartDoc.MirrorFeature`
- `IPartDoc.MirrorPart`