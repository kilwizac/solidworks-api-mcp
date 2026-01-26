---
type: method
interface: IFeatureManager
member: InsertSubWeldFolder2
returns: Feature
parameters:
  -
    name: BodyArray
    type: System.Object
    description: Array of Body2 objects
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertSubWeldFolder
keywords:
  - feature
  - see
  - also
  - ifeature
  - weldment
  - folder
  - weldments
  - folders
  - insertsubweldfolder2
  - ifeaturemanager
  - manager
  - insert
  - sub
  - weld
  - folder2
  - body
  - array
  - object
  - features
  - vba
  - vb
  - net
---

# IFeatureManager.InsertSubWeldFolder2

Creates a sub weld folder feature containing the specified weldment bodies.

## Signature

```csharp
Feature InsertSubWeldFolder2( 
   System.Object
BodyArray
)
```
## Parameters

- `BodyArray` (System.Object): Array of Body2 objects

## Return Value

IFeature

## Examples

- Insert Weldment Features (VBA) (Insert_Weldment_Features_Example_VB.htm)
- Insert Weldment Features (VB.NET) (Insert_Weldment_Features_Example_VBNET.htm)
- Insert Weldment Features (C#) (Insert_Weldment_Features_Example_CSharp.htm)

## See Also

- `IFeatureManager.InsertSubWeldFolder`