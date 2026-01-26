---
type: property
interface: IMirrorPartFeatureData
member: UnlockedProperties
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related: []
keywords:
  - unlockedproperties
  - imirrorpartfeaturedata
  - mirror
  - part
  - feature
  - data
  - unlocked
  - properties
  - boolean
  - sheet
  - metal
  - vb
  - net
  - vba
readonly: null
---

# IMirrorPartFeatureData.UnlockedProperties

Gets or sets whether to enable editing of the sheet-metal definition in this mirrored sheet-metal part.

## Signature

```csharp
System.Boolean UnlockedProperties {get; set;}
```
## Parameters

None.

## Return Value

True to enable editing of the sheet-metal definition in this mirrored sheet-metal part, false to not

## Remarks

IMirrorPartFeatureData::SheetMetalInformation
must be true to access the sheet-metal definition of the mirrored sheet-metal part. Editing the sheet-metal definition updates
cut-list properties
.

## Examples

- Mirror Sheet-metal Part (C#) (Mirror_Sheet-metal_Part_Example_CSharp.htm)
- Mirror Sheet-metal Part (VB.NET) (Mirror_Sheet-metal_Part_Example_VBNET.htm)
- Mirror Sheet-metal Part (VBA) (Mirror_Sheet-metal_Part_Example_VB.htm)