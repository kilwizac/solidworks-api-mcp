---
type: property
interface: IThreadFeatureData
member: NumberOfStarts
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - numberofstarts
  - ithreadfeaturedata
  - thread
  - feature
  - data
  - number
  - starts
  - int32
readonly: null
---

# IThreadFeatureData.NumberOfStarts

Gets or sets the number of times the thread is created in an evenly-spaced pattern around the hole or shaft of this thread feature.

## Signature

```csharp
System.Int32 NumberOfStarts {get; set;}
```
## Parameters

None.

## Return Value

2 (default) <= Number of times the thread is started <= 1000

## Remarks

This property is valid only if
IThreadFeatureData::MultipleStart
is set to true.

## Examples

- IThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IThreadFeatureData)