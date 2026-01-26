---
type: property
interface: IThreadFeatureData
member: ThreadStartAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - threadstartangle
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - start
  - angle
  - double
readonly: null
---

# IThreadFeatureData.ThreadStartAngle

Gets or sets the start angle of the thread of this thread feature

## Signature

```csharp
System.Double ThreadStartAngle {get; set;}
```
## Parameters

None.

## Return Value

0.0 (default) < Thread start angle < 2*pi radians

## Remarks

Specify either a value or an equation that starts with an equal sign (=).

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)