---
type: property
interface: ICoreFeatureData
member: DraftAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICoreFeatureData.DraftOutward
keywords:
  - draftangle
  - icorefeaturedata
  - core
  - feature
  - data
  - draft
  - angle
  - double
  - vb
  - net
  - vba
readonly: null
---

# ICoreFeatureData.DraftAngle

Gets or sets the angle of the draft for this core feature.

## Signature

```csharp
System.Double DraftAngle {get; set;}
```
## Parameters

None.

## Return Value

Angle of draft

## Remarks

To set this property,
ICoreFeatureData::UseDraft
must be true.

## Examples

- Get Core Feature Data (C#) (Get_Core_Feature_Example_CSharp.htm)
- Get Core Feature Data (VB.NET) (Get_Core_Feature_Example_VBNET.htm)
- Get Core Feature Data (VBA) (Get_Core_Feature_Example_VB.htm)

## See Also

- `ICoreFeatureData.DraftOutward`