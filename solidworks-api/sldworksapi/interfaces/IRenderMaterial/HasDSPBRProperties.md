---
type: property
interface: IRenderMaterial
member: HasDSPBRProperties
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - hasdspbrproperties
  - irendermaterial
  - render
  - material
  - has
  - dspbr
  - properties
  - boolean
readonly: true
---

# IRenderMaterial.HasDSPBRProperties

Gets whether this appearance has DSPBR properties.

## Signature

```csharp
System.Boolean HasDSPBRProperties {get;}
```
## Parameters

None.

## Return Value

True if this appearance has DSPBR properties, false if not

## Remarks

If this property is true, use
IRenderMaterial::GetDSPBRMaterial
to obtain the DSPBRMaterial object.