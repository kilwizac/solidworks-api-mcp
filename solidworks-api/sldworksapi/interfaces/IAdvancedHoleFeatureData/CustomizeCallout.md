---
type: property
interface: IAdvancedHoleFeatureData
member: CustomizeCallout
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - customizecallout
  - iadvancedholefeaturedata
  - advanced
  - hole
  - feature
  - data
  - customize
  - callout
  - boolean
readonly: null
---

# IAdvancedHoleFeatureData.CustomizeCallout

Gets or sets whether to customize the hole callouts of the elements of this Advanced Hole.

## Signature

```csharp
System.Boolean CustomizeCallout {get; set;}
```
## Parameters

None.

## Return Value

True to customize hole callouts, false to use default hole callouts

## Remarks

If you set this property to true, use
IAdvancedHoleElementData::CalloutString
to customize the hole callouts.

## Examples

- IAdvancedHoleFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IAdvancedHoleFeatureData)