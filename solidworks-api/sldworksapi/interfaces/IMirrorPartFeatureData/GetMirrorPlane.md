---
type: method
interface: IMirrorPartFeatureData
member: GetMirrorPlane
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related: []
keywords:
  - getmirrorplane
  - imirrorpartfeaturedata
  - mirror
  - part
  - feature
  - data
  - plane
  - object
---

# IMirrorPartFeatureData.GetMirrorPlane

Gets the plane about which this part is mirrored.

## Signature

```csharp
System.Object GetMirrorPlane()
```
## Parameters

None.

## Return Value

IRefPlane or IFace2

## Remarks

Before calling this method, call
IMirrorPartFeatureData::GetMirrorPlaneType
to determine the type of mirror plane that this method returns.

## Examples

- IMirrorPartFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMirrorPartFeatureData)