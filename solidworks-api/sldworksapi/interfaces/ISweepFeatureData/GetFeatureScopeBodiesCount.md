---
type: method
interface: ISweepFeatureData
member: GetFeatureScopeBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ISweepFeatureData.AutoSelect
  - ISweepFeatureData.FeatureScope
  - ISweepFeatureData.FeatureScopeBodies
  - ISweepFeatureData.ISetFeatureScopeBodies
keywords:
  - feature
  - scope
  - sweeps
  - see
  - also
  - isweepfeaturedata
  - getfeaturescopebodiescount
  - sweep
  - data
  - bodies
  - count
  - int32
---

# ISweepFeatureData.GetFeatureScopeBodiesCount

Gets the number of solid bodies affected by the sweep feature in a multibody part.

## Signature

```csharp
System.Int32 GetFeatureScopeBodiesCount()
```
## Parameters

None.

## Return Value

Number of solid bodies affected, -1 if not valid

## Remarks

Call this method before calling
ISweepFeatureData::IGetFeatureScopeBodies
to get the size of the array for that method.
See
Accessing Selections that Define Features
for additional details.

## Examples

- ISweepFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.ISweepFeatureData)

## See Also

- `ISweepFeatureData.AutoSelect`
- `ISweepFeatureData.FeatureScope`
- `ISweepFeatureData.FeatureScopeBodies`
- `ISweepFeatureData.ISetFeatureScopeBodies`