---
type: method
interface: IFeatureManager
member: FinishCornerRelief
returns: Feature
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFlatPatternFeatureData
keywords:
  - flat
  - pattern
  - see
  - iflatpatternfeaturedata
  - corner
  - relief
  - finishcornerrelief
  - ifeaturemanager
  - feature
  - manager
  - finish
  - create
  - vba
  - vb
  - net
---

# IFeatureManager.FinishCornerRelief

Creates a sheet metal corner relief feature.

## Signature

```csharp
Feature FinishCornerRelief()
```
## Parameters

None.

## Return Value

IFeature

## Remarks

Before calling this method, call:
IModelDocExtension::SelectByID2
with Mark = 0 and Append = true to select the sheet metal body in which to create a corner relief feature.
IModelDocExtension::SelectByID2 with Mark = 4 and Append = true to select two faces that form a bend corner.
Call
IFeatureManager::AddCornerReliefCorner
to add the corner to the corner relief feature.
Call
IFeatureManager::AddCornerReliefType
to specify the corner relief for the corner.
Repeat steps 2 - 4 to add another corner to the corner relief feature.

## Examples

- Create Corner Relief Feature (C#) (Create_Corner_Relief_Feature_Example_CSharp.htm)
- Create Corner Relief Feature (VBA) (Create_Corner_Relief_Feature_Example_VB.htm)
- Create Corner Relief Feature (VB.NET) (Create_Corner_Relief_Feature_Example_VBNET.htm)

## See Also

- `IFlatPatternFeatureData`