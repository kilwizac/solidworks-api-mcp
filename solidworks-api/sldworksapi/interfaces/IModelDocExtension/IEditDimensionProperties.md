---
type: method
interface: IModelDocExtension
member: IEditDimensionProperties
returns: System.Boolean
parameters:
  -
    name: TolType
    type: System.Int32
    description: Type of tolerance as defined in swTolType_e
  -
    name: TolMax
    type: System.Double
    description: Maximum value for the tolerance
  -
    name: TolMin
    type: System.Double
    description: Minimum value for the tolerance
  -
    name: TolMaxFit
    type: System.String
    description: Text for the maximum FIT value when using a fit tolerance type
  -
    name: TolMinFit
    type: System.String
    description: Text for the minimum FIT value when using a fit tolerance type
  -
    name: UseDocPrec
    type: System.Boolean
    description: True to use the document's precision value, false to use value specified for Precision
  -
    name: Precision
    type: System.Int32
    description: Precision to use for this dimension if UseDocPrec is false
  -
    name: ArrowsIn
    type: System.Int32
    description: Arrow direction as defined in swDimensionArrowsSide_e
  -
    name: UseDocArrows
    type: System.Boolean
    description: True to use the document's arrow types, false to use values specified for Arrow1 and Arrow2
  -
    name: Arrow1
    type: System.Int32
    description: Type of arrow to use for the first arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
  -
    name: Arrow2
    type: System.Int32
    description: Type of arrow to use for the second arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
  -
    name: PrefixText
    type: System.String
    description: Text for the prefix of the dimension
  -
    name: SuffixText
    type: System.String
    description: Text for the suffix of the dimension
  -
    name: ShowValue
    type: System.Boolean
    description: True to display the value of the dimension in the user interface, false to not
  -
    name: CalloutText1
    type: System.String
    description: Callout text to display above the dimension
  -
    name: CalloutText2
    type: System.String
    description: Callout text to display below the dimension
  -
    name: DimensionLowerText
    type: System.String
    description: Text to display below the dimension line; valid for display dimensions in drawings only
  -
    name: CenterText
    type: System.Boolean
    description: True to center the text in the dimension, false to not
  -
    name: ConfigOption
    type: System.Int32
    description: Configuration option as defined in swInConfigurationOpts_e
  -
    name: Count
    type: System.Int32
    description: Number of configurations
  -
    name: ConfigNames
    type: System.String
    description: in-process, unmanaged C++: Pointer to an array of configuration names to which to apply these edits (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - dimensions
  - ui
related:
  - IModelDocExtension.EditDimensionProperties
keywords:
  - dimension
  - see
  - also
  - idimension
  - edit
  - ieditdimensionproperties
  - imodeldocextension
  - model
  - doc
  - extension
  - properties
  - tol
  - type
  - int32
  - max
  - double
  - min
  - fit
  - string
  - use
  - prec
  - boolean
  - precision
  - arrows
  - arrow1
  - arrow2
  - prefix
  - text
  - suffix
  - show
  - value
  - callout
  - text1
  - text2
  - lower
  - center
  - config
  - option
  - count
  - names
---

# IModelDocExtension.IEditDimensionProperties

Edits the selected dimension.

## Signature

```csharp
System.Boolean IEditDimensionProperties( 
   System.Int32
TolType
,
   System.Double
TolMax
,
   System.Double
TolMin
,
   System.String
TolMaxFit
,
   System.String
TolMinFit
,
   System.Boolean
UseDocPrec
,
   System.Int32
Precision
,
   System.Int32
ArrowsIn
,
   System.Boolean
UseDocArrows
,
   System.Int32
Arrow1
,
   System.Int32
Arrow2
,
   System.String
PrefixText
,
   System.String
SuffixText
,
   System.Boolean
ShowValue
,
   System.String
CalloutText1
,
   System.String
CalloutText2
,
   System.String
DimensionLowerText
,
   System.Boolean
CenterText
,
   System.Int32
ConfigOption
,
   System.Int32
Count
,
   ref System.String
ConfigNames
)
```
## Parameters

- `TolType` (System.Int32): Type of tolerance as defined in swTolType_e
- `TolMax` (System.Double): Maximum value for the tolerance
- `TolMin` (System.Double): Minimum value for the tolerance
- `TolMaxFit` (System.String): Text for the maximum FIT value when using a fit tolerance type
- `TolMinFit` (System.String): Text for the minimum FIT value when using a fit tolerance type
- `UseDocPrec` (System.Boolean): True to use the document's precision value, false to use value specified for Precision
- `Precision` (System.Int32): Precision to use for this dimension if UseDocPrec is false
- `ArrowsIn` (System.Int32): Arrow direction as defined in swDimensionArrowsSide_e
- `UseDocArrows` (System.Boolean): True to use the document's arrow types, false to use values specified for Arrow1 and Arrow2
- `Arrow1` (System.Int32): Type of arrow to use for the first arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
- `Arrow2` (System.Int32): Type of arrow to use for the second arrow of this dimension as defined in swArrowStyle_e if UseDocArrows is false
- `PrefixText` (System.String): Text for the prefix of the dimension
- `SuffixText` (System.String): Text for the suffix of the dimension
- `ShowValue` (System.Boolean): True to display the value of the dimension in the user interface, false to not
- `CalloutText1` (System.String): Callout text to display above the dimension
- `CalloutText2` (System.String): Callout text to display below the dimension
- `DimensionLowerText` (System.String): Text to display below the dimension line; valid for display dimensions in drawings only
- `CenterText` (System.Boolean): True to center the text in the dimension, false to not
- `ConfigOption` (System.Int32): Configuration option as defined in swInConfigurationOpts_e
- `Count` (System.Int32): Number of configurations
- `ConfigNames` (System.String): in-process, unmanaged C++: Pointer to an array of configuration names to which to apply these edits (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

True if the dimension is modified, false if not

## Remarks

This method:
always changes the dimension's parameters in the active configuration. For example, if you specify swInConfigurationOpts_e.swSpecifyConfiguration for ConfigOption and do not specify the name of the active configuration in ConfigNames, then the dimension parameters in the active configuration are affected.
does not support
hole callouts
.

## See Also

- `IModelDocExtension.EditDimensionProperties`