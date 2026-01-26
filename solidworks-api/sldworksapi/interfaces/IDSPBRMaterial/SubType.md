---
type: property
interface: IDSPBRMaterial
member: SubType
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - subtype
  - idspbrmaterial
  - idspbr
  - material
  - sub
  - type
  - string
readonly: null
---

# IDSPBRMaterial.SubType

Gets or sets the subtype of this material.

## Signature

```csharp
System.String SubType {get; set;}
```
## Parameters

None.

## Return Value

Name of this material's subtype

## Remarks

Use the following subtypes to expose subsets of parameters:
"Car Paint"
"Metal"
"Emissive"
"Textile"
"Leather"
"Wood"
"Glass"
"Plastic"
For more information about this property:
Open https://dassaultsystemes-technology.github.io/EnterprisePBRShadingModel/spec-2025x.md.html in an internet browser, click CTRL-F and type "Material Subtypes" in the pop up. Click
Next result
repeatedly.
Search for "Accessing Material Types" on the web.