---
type: method
interface: IMirrorPartFeatureData
member: GetMirrorPlaneType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related: []
keywords:
  - getmirrorplanetype
  - imirrorpartfeaturedata
  - mirror
  - part
  - feature
  - data
  - plane
  - type
  - int32
---

# IMirrorPartFeatureData.GetMirrorPlaneType

Gets whether the mirror plane is a face or a reference plane.

## Signature

```csharp
System.Int32 GetMirrorPlaneType()
```
## Parameters

None.

## Return Value

Type of mirror plane as defined in swMirrorPlaneType_e

## Remarks

Call this method to determine the type of mirror plane returned by
IMirrorPartFeatureData::GetMirrorPlane
.

## Examples

- IMirrorPartFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorPartFeatureData)