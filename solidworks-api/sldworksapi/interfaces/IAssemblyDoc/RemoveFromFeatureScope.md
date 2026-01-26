---
type: method
interface: IAssemblyDoc
member: RemoveFromFeatureScope
returns: System.Boolean
parameters:
  -
    name: CompName
    type: System.String
    description: Name of component to remove
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - features
  - ui
related:
  - IAssemblyDoc.AddToFeatureScope
  - IAssemblyDoc.GetFeatureScope
  - IAssemblyDoc.GetFeatureScopeCount
  - IAssemblyDoc.UpdateFeatureScope
keywords:
  - assemblies
  - see
  - also
  - iassemblydoc
  - feature
  - scope
  - removefromfeaturescope
  - assembly
  - doc
  - remove
  - comp
  - name
  - string
  - boolean
---

# IAssemblyDoc.RemoveFromFeatureScope

Removes a component from the scope of the currently selected assembly feature.

## Signature

```csharp
System.Boolean RemoveFromFeatureScope( 
   System.String
CompName
)
```
## Parameters

- `CompName` (System.String): Name of component to remove

## Return Value

True if successfully removed, false if not

## Remarks

If no assembly feature is selected, this method removes a component from the list that is to be used with the next assembly feature created.
Assembly features allow you to create a feature that affects multiple components in an assembly. For example, if you need a hole through two blocks to bolt them together, you can create a hole as an assembly feature and make it go through both blocks.
The scope of the assembly feature determines which components are affected by this feature. In other words, it describes which components can contain the feature.
There are two ways to use the this technique:
If you have an assembly feature selected, this method removes a component from the assembly features scope. Any component that is not in the scope of the assembly feature cannot be affected by the assembly feature.
If you create a list of components, this method allows you to remove a component from the list. The next assembly feature created affects each of the components in your list.
After you use one of these techniques, you can use
IAssemblyDoc::UpdateFeatureScope
to display the changes.

## See Also

- `IAssemblyDoc.AddToFeatureScope`
- `IAssemblyDoc.GetFeatureScope`
- `IAssemblyDoc.GetFeatureScopeCount`
- `IAssemblyDoc.UpdateFeatureScope`