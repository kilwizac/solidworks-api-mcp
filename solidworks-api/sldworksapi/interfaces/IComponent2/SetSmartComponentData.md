---
type: method
interface: IComponent2
member: SetSmartComponentData
returns: System.Boolean
parameters:
  -
    name: FeaturesSelected
    type: System.Object
    description: Array of boolean values indicating which features to enable in the Smart Component (see Remarks )
  -
    name: ComponentsSelected
    type: System.Object
    description: Array of boolean values indicating which components to enable in the Smart Component (see Remarks )
  -
    name: References
    type: System.Object
    description: Array of feature reference entities in the target assembly that are used to activate the features specified by FeaturesSelected (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IAssemblyDoc.AddSmartComponent
  - IAssemblyDoc.CreateSmartComponent
keywords:
  - components
  - see
  - also
  - icomponent2
  - smart
  - setsmartcomponentdata
  - component2
  - component
  - data
  - features
  - selected
  - object
  - references
  - boolean
  - activate
  - assembly
  - vba
  - vb
  - net
---

# IComponent2.SetSmartComponentData

Sets the features, components, and feature references of a Smart Component.

## Signature

```csharp
System.Boolean SetSmartComponentData( 
   System.Object
FeaturesSelected
,
   System.Object
ComponentsSelected
,
   System.Object
References
)
```
## Parameters

- `FeaturesSelected` (System.Object): Array of boolean values indicating which features to enable in the Smart Component (see Remarks )
- `ComponentsSelected` (System.Object): Array of boolean values indicating which components to enable in the Smart Component (see Remarks )
- `References` (System.Object): Array of feature reference entities in the target assembly that are used to activate the features specified by FeaturesSelected (see Remarks )

## Return Value

True if successful, false if not

## Remarks

A Smart Component is defined by its:
Components
Features
Feature references
See the SOLIDWORKS Help for more information about Smart Components.
Use this method to:
Change which features and components to enable in a Smart Component.
Activate the Smart Features.
Before calling this method:
Open an assembly that contains a Smart Component whose Smart Features have not yet been activated.
Find the Smart Component in the assembly using
IComponent2::IsSmartComponent
.
Call
IComponent2::GetSmartComponentData
to obtain the current feature and component arrays for the Smart Component.
Create two boolean arrays whose elements map one-to-one with the elements in the feature and component arrays.
For each element in each boolean array, specify true if the corresponding feature or component is enabled in the Smart Component. Specify false if it is not.
Set FeaturesSelected and ComponentsSelected with the corresponding boolean arrays.
Create an array of reference entities (e.g., faces, edges, points) selected from the target assembly that map to the feature reference entities that were defined for the Smart Component.
Set References to the array of reference entities.
Use
ISmartComponentFeatureData
to:
Insert new features and components into a Smart Component.
Delete features and components from a Smart Component.

## Examples

- Activate Smart Features in an Assembly (VBA) (Activate_Smart_Features_in_an_Assembly_Example_VB.htm)
- Activate Smart Features in an Assembly (VB.NET) (Activate_Smart_Features_in_an_Assembly_Example_VBNET.htm)
- Activate Smart Features in an Assembly (C#) (Activate_Smart_Features_in_an_Assembly_Example_CSharp.htm)

## See Also

- `IAssemblyDoc.AddSmartComponent`
- `IAssemblyDoc.CreateSmartComponent`