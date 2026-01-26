---
type: method
interface: ITablePatternFeatureData
member: ReleaseSelectionAccess
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related: []
keywords:
  - releaseselectionaccess
  - itablepatternfeaturedata
  - table
  - pattern
  - feature
  - data
  - release
  - selection
  - access
  - void
  - driven
  - properties
  - vba
  - points
  - repeating
  - elements
  - vb
  - net
---

# ITablePatternFeatureData.ReleaseSelectionAccess

Releases access to the selections that created this table-driven pattern feature.

## Signature

```csharp
void ReleaseSelectionAccess()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

ITablePatternFeatureData::AccessSelections
and
ITablePatternFeatureData::IAccessSelections2
put the model in a rollback state to allow access to the selections that define the feature.
Use this method to restore the rollback state if you did not modify the feature, or use
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you did modify the feature.

## Examples

- Get Table-driven Pattern Properties (VBA) (Get_Table-driven_Pattern_Properties_Example_VB.htm)
- Get Points of Repeating Elements in Table-driven Pattern (C#) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_CSharp.htm)
- Get Points of Repeating Elements in Table-driven Pattern (VB.NET) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_VBNET.htm)
- Get Points of Repeating Elements in Table-driven Pattern (VBA) (Get_Points_of_Repeating_Elements_in_Table-driven_Pattern_Example_VB.htm)