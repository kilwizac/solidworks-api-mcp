---
type: property
interface: IThreadFeatureData
member: RotationAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - rotationangle
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - rotation
  - angle
  - double
readonly: null
---

# IThreadFeatureData.RotationAngle

Gets or sets the angle of rotation of the thread helix of this thread feature.

## Signature

```csharp
System.Double RotationAngle {get; set;}
```
## Parameters

None.

## Return Value

0.0 (default) <= Angle of rotation <= 2*pi radians

## Remarks

Specify either a value or an equation that starts with an equal sign (=).

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)