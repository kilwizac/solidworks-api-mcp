---
type: method
interface: IFeatureManager
member: InsertWeldmentCutList2
returns: Feature
parameters:
  -
    name: Bodies
    type: System.Object
    description: Array of Body2 objects
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeatureManager.InsertWeldmentCutList
  - IWeldmentCutListFeature
keywords:
  - feature
  - see
  - also
  - ifeature
  - weldment
  - cut
  - lists
  - weldments
  - insertweldmentcutlist2
  - ifeaturemanager
  - manager
  - insert
  - list2
  - bodies
  - object
  - list
  - example
  - vba
  - vb
  - net
---

# IFeatureManager.InsertWeldmentCutList2

Inserts a cut-list-item folder feature containing the specified weldment bodies.

## Signature

```csharp
Feature InsertWeldmentCutList2( 
   System.Object
Bodies
)
```
## Parameters

- `Bodies` (System.Object): Array of Body2 objects

## Return Value

IFeature

## Examples

- Insert Weldment Cut List Example #2 (VBA) (Insert_Weldment_Cut_List2_Example_VB.htm)
- Insert Weldment Cut List Example #2 (VB.NET) (Insert_Weldment_Cut_List2_Example_VBNET.htm)
- Insert Weldment Cut List Example #2 (C#) (Insert_Weldment_Cut_List2_Example_CSharp.htm)

## See Also

- `IFeatureManager.InsertWeldmentCutList`
- `IWeldmentCutListFeature`