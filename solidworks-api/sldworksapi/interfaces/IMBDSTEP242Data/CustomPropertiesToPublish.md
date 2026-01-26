---
type: property
interface: IMBDSTEP242Data
member: CustomPropertiesToPublish
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related: []
keywords:
  - custompropertiestopublish
  - imbdstep242data
  - imbdstep242
  - data
  - custom
  - properties
  - publish
  - object
readonly: null
---

# IMBDSTEP242Data.CustomPropertiesToPublish

Gets or sets the model's custom properties to export to the STEP 242 format.

## Signature

```csharp
System.Object CustomPropertiesToPublish {get; set;}
```
## Parameters

None.

## Return Value

Array of custom properties

## Remarks

This property is valid only if
IMBDSTEP242Data::PublishWithAllCustomProperties
is set to false.

## Examples

- IMBDSTEP242Data (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IMBDSTEP242Data)