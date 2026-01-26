---
type: method
interface: ISurfaceOffsetFeatureData
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
    description: Component in which the feature is to be modified
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - selections
related:
  - ISurfaceOffsetFeatureData.IAccessSelections
keywords:
  - accessselections
  - isurfaceoffsetfeaturedata
  - surface
  - offset
  - feature
  - data
  - access
  - selections
  - top
  - doc
  - object
  - component
  - boolean
  - vba
  - vb
  - net
---

# ISurfaceOffsetFeatureData.AccessSelections

Accesses the selections that define this surface offset feature.

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
- `Component` (System.Object): Component in which the feature is to be modified

## Return Value

True if the selections are successfully accessed, false if not

## Remarks

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
ISurfaceOffsetFeatureData::ReleaseSelectionAccess
if you did not

## Examples

- Get Offset Surface Data (VBA) (Get_Offset_Surface_Data_Example_VB.htm)
- Get Offset Surface Data (VB.NET) (Get_Offset_Surface_Data_Example_VBNET.htm)
- Get Offset Surface Data (C#) (Get_Offset_Surface_Data_Example_CSharp.htm)

## See Also

- `ISurfaceOffsetFeatureData.IAccessSelections`