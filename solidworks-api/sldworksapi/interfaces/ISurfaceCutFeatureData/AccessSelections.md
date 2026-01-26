---
type: method
interface: ISurfaceCutFeatureData
member: AccessSelections
returns: System.Boolean
parameters:
  -
    name: TopDoc
    type: System.Object
    description: Top-level document
  -
    name: Component
    type: System.Object
    description: Component in which the surface-cut feature is to be modified
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - ISurfaceCutFeatureData.IAccessSelections
keywords:
  - accessselections
  - isurfacecutfeaturedata
  - surface
  - cut
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - modify
  - vb
  - net
  - vba
---

# ISurfaceCutFeatureData.AccessSelections

Accesses the selections that define this surface-cut feature.

## Signature

```csharp
System.Boolean AccessSelections( 
   System.Object
TopDoc
,
   System.Object
Component
)
```
## Parameters

- `TopDoc` (System.Object): Top-level document
- `Component` (System.Object): Component in which the surface-cut feature is to be modified

## Return Value

True if successful, false if not

## Remarks

To access this interface, you must declare it as SurfCutFeatureData or ISurfCutFeatureData. See the examples for details.
To modify a feature in a...
Then...
Part
TopDoc argument is the
IModelDoc2
for the part
Component argument is NULL
Assembly
TopDoc is the IModelDoc2 object for the assembly
Component argument is the
IComponent2
object in which the feature is to be modified
This method puts the model into a rollback state to allow access to the selections that define this feature. You must use either of the following methods to restore the rollback state:
IFeature::ModifyDefinition
or
IFeature::IModifyDefinition2
if you modified the feature
ISurfaceCutFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Modify Surface-cut Feature (C#) (Modify_Surface_Cut_Feature_Example_CSharp.htm)
- Modify Surface-cut Feature (VB.NET) (Modify_Surface_Cut_Feature_Example_VBNET.htm)
- Modify Surface-cut Feature (VBA) (Modify_Surface_Cut_Feature_Example_VB.htm)

## See Also

- `ISurfaceCutFeatureData.IAccessSelections`