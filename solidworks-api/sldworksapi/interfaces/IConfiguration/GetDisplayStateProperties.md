---
type: method
interface: IConfiguration
member: GetDisplayStateProperties
returns: System.Object
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of the display state
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetDisplayStateBodyProperties
  - IConfiguration.GetDisplayStateComponentProperties
  - IConfiguration.GetDisplayStateComponentVisibility
  - IConfiguration.GetDisplayStateFaceProperties
  - IConfiguration.GetDisplayStateFeatureProperties
  - IConfiguration.GetDisplayStates
  - IConfiguration.GetDisplayStatesCount
keywords:
  - display
  - states
  - getdisplaystateproperties
  - iconfiguration
  - configuration
  - state
  - properties
  - name
  - string
  - object
---

# IConfiguration.GetDisplayStateProperties

Gets the material properties of the specified display state.

## Signature

```csharp
System.Object GetDisplayStateProperties( 
   System.String
DisplayStateName
)
```
## Parameters

- `DisplayStateName` (System.String): Name of the display state

## Return Value

Array of display state properties (see Remarks )

## Remarks

The material values returned include the face color (R,G,B values), reflectivity (ambient, diffuse, specular, shininess), transparency, and emission. Valid values are from 0 to 1 for all variables.
If the return value is all -1 values, then material property values are not assigned to the feature.
The format of return value is an array of doubles as follows:
[
R, G, B, Ambient, Diffuse, Specular, Shininess, Transparency, Emission
]

## See Also

- `IConfiguration.GetDisplayStateBodyProperties`
- `IConfiguration.GetDisplayStateComponentProperties`
- `IConfiguration.GetDisplayStateComponentVisibility`
- `IConfiguration.GetDisplayStateFaceProperties`
- `IConfiguration.GetDisplayStateFeatureProperties`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.GetDisplayStatesCount`