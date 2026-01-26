---
type: method
interface: IConfiguration
member: GetDisplayStateFaceProperties
returns: System.Object
parameters:
  -
    name: DisplayStateName
    type: System.String
    description: Name of the display state
  -
    name: Faces
    type: System.Object
    description: Array if IFace2 objects
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IConfiguration.GetDisplayStateBodyProperties
  - IConfiguration.GetDisplayStateComponentProperties
  - IConfiguration.GetDisplayStateComponentVisibility
  - IConfiguration.GetDisplayStateFeatureProperties
  - IConfiguration.GetDisplayStateProperties
  - IConfiguration.GetDisplayStates
  - IConfiguration.GetDisplayStatesCount
keywords:
  - display
  - states
  - getdisplaystatefaceproperties
  - iconfiguration
  - configuration
  - state
  - face
  - properties
  - name
  - string
  - faces
  - object
---

# IConfiguration.GetDisplayStateFaceProperties

Gets the faces and their material properties in the specified display state.

## Signature

```csharp
System.Object GetDisplayStateFaceProperties( 
   System.String
DisplayStateName
,
   out System.Object
Faces
)
```
## Parameters

- `DisplayStateName` (System.String): Name of the display state
- `Faces` (System.Object): Array if IFace2 objects

## Return Value

Array of face properties (see Remarks )

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
- `IConfiguration.GetDisplayStateFeatureProperties`
- `IConfiguration.GetDisplayStateProperties`
- `IConfiguration.GetDisplayStates`
- `IConfiguration.GetDisplayStatesCount`