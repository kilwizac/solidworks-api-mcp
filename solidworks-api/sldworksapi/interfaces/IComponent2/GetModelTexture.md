---
type: method
interface: IComponent2
member: GetModelTexture
returns: Texture
parameters:
  -
    name: ConfigName
    type: System.String
    description: Name of the configuration
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related:
  - IComponent2.GetTexture
keywords:
  - texture
  - see
  - also
  - itexture
  - components
  - icomponent2
  - getmodeltexture
  - component2
  - model
  - config
  - name
  - string
  - textures
  - vba
  - vb
  - net
---

# IComponent2.GetModelTexture

Gets the texture applied to this lightweight component in the specified configuration.

## Signature

```csharp
Texture GetModelTexture( 
   System.String
ConfigName
)
```
## Parameters

- `ConfigName` (System.String): Name of the configuration

## Return Value

ITexture

## Examples

- Get Model Textures (VBA) (Get_Model_Texture_Example_VB.htm)
- Get Model Textures (VB.NET) (Get_Model_Texture_Example_VBNET.htm)
- Get Model Textures (C#) (Get_Model_Texture_Example_CSharp.htm)

## See Also

- `IComponent2.GetTexture`