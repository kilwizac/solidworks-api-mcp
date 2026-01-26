---
type: method
interface: IAssemblyDoc
member: AddToFeatureScope
returns: System.Boolean
parameters:
  -
    name: CompName
    type: System.String
    description: Name of component to add
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - features
  - ui
related: []
keywords:
  - addtofeaturescope
  - iassemblydoc
  - assembly
  - doc
  - add
  - feature
  - scope
  - comp
  - name
  - string
  - boolean
---

# IAssemblyDoc.AddToFeatureScope

Adds a component to the scope of the currently selected assembly feature.

## Signature

```csharp
System.Boolean AddToFeatureScope( 
   System.String
CompName
)
```
## Parameters

- `CompName` (System.String): Name of component to add

## Return Value

True if added successfully, false otherwise

## Remarks

If no assembly feature is selected, then this method adds a component to a list for use with the next assembly feature created.
Assembly features allow you to create a feature that affects multiple components in an assembly. For example, if you need a hole through two blocks so that you could bolt them together, you can create a hole as an assembly feature and make it go through both blocks.
The scope of the assembly feature determines which components are effected by this feature. In other words, it describes which components can contain the feature.
There are two ways to use the IAssemblyDoc::AddToFeatureScope method:
When an assembly feature is selected, IAssemblyDoc::AddToFeatureScope adds a component to the assembly feature's scope. Any component in the scope of the assembly feature can be affected by the assembly feature.
You can also use IAssemblyDoc::AddToFeatureScope to compile a group of components. The next assembly feature created (for example,
IFeatureManager::SimpleHole
) affects each of the components in the compiled group.
After completing these steps, use
IAssemblyDoc::UpdateFeatureScope
to display the changes.