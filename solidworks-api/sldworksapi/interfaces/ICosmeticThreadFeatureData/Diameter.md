---
type: property
interface: ICosmeticThreadFeatureData
member: Diameter
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICosmeticThreadFeatureData.DiameterType
keywords:
  - diameter
  - icosmeticthreadfeaturedata
  - cosmetic
  - thread
  - feature
  - data
  - double
readonly: null
---

# ICosmeticThreadFeatureData.Diameter

Gets or sets the value of the diameter of the cosmetic thread.

## Signature

```csharp
System.Double Diameter {get; set;}
```
## Parameters

None.

## Return Value

Depth of the diameter (see Remarks )

## Remarks

If
ICosmeticThreadFeatureData::DiameterType
...
Then the value of Diameter is the...
swCosmeticThread_MajorDiameter
- or -
swCosmeticThread_MinorDiameter
Diameter of the cosmetic thread
swCosmeticThread_ConicalOffset
Offset of the cosmetic thread from the edge of the conical hole

## Examples

- ICosmeticThreadFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ICosmeticThreadFeatureData)

## See Also

- `ICosmeticThreadFeatureData.DiameterType`