---
type: method
interface: IFeature
member: GetID
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - id
  - feature
  - getid
  - ifeature
  - int32
  - type
  - instant3d
  - vb
  - net
  - vba
---

# IFeature.GetID

Gets the feature ID of this feature.

## Signature

```csharp
System.Int32 GetID()
```
## Parameters

None.

## Return Value

Feature ID of this feature

## Remarks

A feature ID:
is unique within the document.
is persistent across SOLIDWORKS Design sessions and never changes, even if you
change the name of the feature
.
can be used to identify a specific feature when multiple features exist in a model.
cannot be assigned by users.
is not the same as a
persistent reference ID
. You can get a feature using its persistent reference ID, but you cannot get a feature using this method.

## Examples

- Get Type of Instant3D Feature (C#) (Get_Type_of_Instant3D_Feature_Example_CSharp.htm)
- Get Type of Instant3D Feature (VB.NET) (Get_Type_of_Instant3D_Feature_Example_VBNET.htm)
- Get Type of Instant3D Feature (VBA) (Get_Type_of_Instant3D_Feature_Example_VB.htm)