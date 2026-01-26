---
type: method
interface: IFeatureManager
member: AddCornerReliefCorner
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFlatPatternFeatureData
keywords:
  - corner
  - relief
  - flat
  - pattern
  - see
  - iflatpatternfeaturedata
  - addcornerreliefcorner
  - ifeaturemanager
  - feature
  - manager
  - add
  - int32
  - create
  - vba
  - vb
  - net
---

# IFeatureManager.AddCornerReliefCorner

Adds the bend corner of two selected faces of a sheet metal body to the set of corners to which to apply a corner relief.

## Signature

```csharp
System.Int32 AddCornerReliefCorner()
```
## Parameters

None.

## Return Value

Index of corner to which to apply the corner relief; used by IFeatureManager::AddCornerReliefType

## Remarks

To create a corner relief feature:
Call
IModelDocExtension::SelectByID2
with Mark = 0 and Append = true to select the sheet metal body in which to create a corner relief feature.
Call IModelDocExtension::SelectByID2 with Mark = 4 and Append = true to select two faces that form a bend corner.
Call this method to add the corner to the corner relief feature.
Call
IFeatureManager::AddCornerReliefType
to specify the corner relief for the corner.
Repeat steps 2 - 4 to add another corner to the corner relief feature.
Call
IFeatureManager::FinishCornerRelief
.

## Examples

- Create Corner Relief Feature (C#) (Create_Corner_Relief_Feature_Example_CSharp.htm)
- Create Corner Relief Feature (VBA) (Create_Corner_Relief_Feature_Example_VB.htm)
- Create Corner Relief Feature (VB.NET) (Create_Corner_Relief_Feature_Example_VBNET.htm)

## See Also

- `IFlatPatternFeatureData`