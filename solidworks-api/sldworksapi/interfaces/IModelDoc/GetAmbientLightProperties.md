---
type: method
interface: IModelDoc
member: GetAmbientLightProperties
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: 
  -
    name: Ambient
    type: System.Double
    description: 
  -
    name: Diffuse
    type: System.Double
    description: 
  -
    name: Specular
    type: System.Double
    description: 
  -
    name: Colour
    type: System.Int32
    description: 
  -
    name: Enabled
    type: System.Boolean
    description: 
  -
    name: Fixed
    type: System.Boolean
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - getambientlightproperties
  - imodeldoc
  - model
  - doc
  - ambient
  - light
  - properties
  - name
  - string
  - double
  - diffuse
  - specular
  - colour
  - int32
  - enabled
  - boolean
  - fixed
---

# IModelDoc.GetAmbientLightProperties

Obsolete. Superseded by IModelDoc2::GetAmbientLightProperties.

## Signature

```csharp
System.Boolean GetAmbientLightProperties( 
   System.String
Name
,
   ref System.Double
Ambient
,
   ref System.Double
Diffuse
,
   ref System.Double
Specular
,
   ref System.Int32
Colour
,
   ref System.Boolean
Enabled
,
   ref System.Boolean
Fixed
)
```
## Parameters

- `Name` (System.String): 
- `Ambient` (System.Double): 
- `Diffuse` (System.Double): 
- `Specular` (System.Double): 
- `Colour` (System.Int32): 
- `Enabled` (System.Boolean): 
- `Fixed` (System.Boolean): 

## Return Value

Unknown.