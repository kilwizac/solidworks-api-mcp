---
type: method
interface: IFeature
member: IModifyDefinition2
returns: System.Boolean
parameters:
  -
    name: Data
    type: System.Object
    description: IUnknown interface to the feature data object; use QueryInterface to get the interface to the actual object
  -
    name: TopDoc
    type: ModelDoc2
    description: Top-level document (see Remarks )
  -
    name: Component
    type: Component2
    description: Component for the feature (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.GetDefinition
  - IFeature.ModifyDefinition
keywords:
  - modify
  - feature
  - see
  - also
  - ifeature
  - definition
  - imodifydefinition2
  - definition2
  - data
  - object
  - top
  - doc
  - model
  - doc2
  - component
  - component2
  - boolean
---

# IFeature.IModifyDefinition2

Updates the definition of a feature with the new values in an associated feature data object obtained with IFeature::IGetDefinition.

## Signature

```csharp
System.Boolean IModifyDefinition2( 
   System.Object
Data
,
   ModelDoc2
TopDoc
,
   Component2
Component
)
```
## Parameters

- `Data` (System.Object): IUnknown interface to the feature data object; use QueryInterface to get the interface to the actual object
- `TopDoc` (ModelDoc2): Top-level document (see Remarks )
- `Component` (Component2): Component for the feature (see Remarks )

## Return Value

True if the feature is updated successfully, false if not

## Remarks

To modify a feature in...
Then TopDoc argument...
A part
Is the
IModelDoc2
object for the part and the Component argument should be Nothing or null
An assembly
Should be the assembly IModelDoc2 object and the Component argument should be the
IComponent2
object in which the feature is to be modified
When you modify a feature in an assembly, this method leaves the assembly in Editing Part mode. You can switch back to editing the assembly by calling
IAssemblyDoc::EditAssembly
.

## See Also

- `IFeature.GetDefinition`
- `IFeature.ModifyDefinition`