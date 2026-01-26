---
type: method
interface: IConfiguration
member: GetDisplayStateComponentProperties
returns: System.Object
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of the display state
  -
    name: Components
    type: System.Object
    description: Array of IComponent2 s
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetDisplayStateBodyProperties
  - IConfiguration.GetDisplayStateComponentVisibility
  - IConfiguration.GetDisplayStateFaceProperties
  - IConfiguration.GetDisplayStateFeatureProperties
  - IConfiguration.GetDisplayStateProperties
  - IConfiguration.GetDisplayStates
  - IConfiguration.GetDisplayStatesCount
keywords:
  - display
  - states
  - getdisplaystatecomponentproperties
  - iconfiguration
  - configuration
  - state
  - component
  - properties
  - name
  - string
  - components
  - object
---

# IConfiguration.GetDisplayStateComponentProperties

Gets the components and their material properties in the specified display state.

## Signature

```csharp
System.Object GetDisplayStateComponentProperties( 
   System.String
DisplayStateName
,
   out System.Object
Components
)
```
## Parameters

- `DisplayStateName` (System.String): Name of the display state
- `Components` (System.Object): Array of IComponent2 s

## Return Value

Array of component properties (see Remarks )

## Remarks

The material values returned include the face color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission. Valid values are from 0 to 1 for all variables.
If the return value is all -1 values, then material property values are not assigned to the feature.
The format of the return value is an array of doubles as follows:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]

## See Also

- `IConfiguration.GetDisplayStateBodyProperties`
- `IConfiguration.GetDisplayStateComponentVisibility`
- `IConfiguration.GetDisplayStateFaceProperties`
- `IConfiguration.GetDisplayStateFeatureProperties`
- `IConfiguration.GetDisplayStateProperties`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.GetDisplayStatesCount`