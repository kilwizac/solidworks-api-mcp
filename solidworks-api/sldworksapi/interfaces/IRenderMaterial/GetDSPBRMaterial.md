---
type: method
interface: IRenderMaterial
member: GetDSPBRMaterial
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - getdspbrmaterial
  - irendermaterial
  - render
  - material
  - dspbr
  - object
---

# IRenderMaterial.GetDSPBRMaterial

Gets the DSPBRMaterial object.

## Signature

```csharp
System.Object GetDSPBRMaterial()
```
## Parameters

None.

## Return Value

IDSPBRMaterial

## Remarks

This method is valid only if
IRenderMaterial::HasDSPBRProperties
is true.