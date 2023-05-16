$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountLoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Account Login Page Test",
  "description": "",
  "id": "account-login-page-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "User Login and Log out Successfully",
  "description": "",
  "id": "account-login-page-test;user-login-and-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on My Account link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter email in email field",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter password in password field",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on login",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see text My Account",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Account Log Out",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see text Account Logout",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on Continue button",
  "keyword": "Then "
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 352877900,
  "error_message": "java.lang.ExceptionInInitializerError\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n\tat ✽.When I click on My Account link(AccountLoginPage.feature:13)\r\nCaused by: java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @47089e5f\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:387)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:363)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:311)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:180)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:174)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iEnterEmailInEmailField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iEnterPasswordInPasswordField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iShouldSeeTextMyAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnMyAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnAccountLogOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iShouldSeeTextAccountLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("AccountRegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Account Register Page Test",
  "description": "",
  "id": "account-register-page-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "",
  "description": "",
  "id": "account-register-page-test;",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I click on My Account link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter First name",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I enter Last name",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter email",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter telephone",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter password",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Yes radio button for subscribe",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on Privacy Policy check box",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Click on Continues button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see message Your Account Has Been Created!",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on Click on Continue button again",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on My Account",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Account Log Out",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnMyAccountLink()"
});
formatter.result({
  "duration": 918700,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n\tat ✽.When I click on My Account link(AccountRegisterPage.feature:13)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @47089e5f [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:387)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:363)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:311)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:180)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:174)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterFirstName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterLastName()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterEmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterTelephone()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iEnterConfirmPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iSelectYesRadioButtonForSubscribe()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iClickOnPrivacyPolicyCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iClickOnContinuesButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iShouldSeeMessageYourAccountHasBeenCreated()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountRegisterPageSteps.iClickOnClickOnContinueButtonAgain()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnMyAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnAccountLogOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AccountLoginPageSteps.iClickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("DesktopPage.feature");
formatter.feature({
  "line": 1,
  "name": "Desktop Page Test",
  "description": "",
  "id": "desktop-page-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "User should add product to cart successfully",
  "description": "",
  "id": "desktop-page-test;user-should-add-product-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I mouse hover on Desktop tab and Click",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Show All Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Sort By Position Name: A to Z",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I select product HP LP3065",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should navigate to product page and should see text HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I select delivery date 2023-11-30",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should see message Success: You have added HP LP3065 to your shopping cart!",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I click on link shopping cart display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should see text Shopping Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I click on currency tab",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I change currency to £ sterling",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should see text HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I should see the Delivery Date 2023-11-30",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see the model Product21",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I shouldsee total price is £74.73",
  "keyword": "Then "
});
formatter.match({
  "location": "DesktopPageSteps.iMouseHoverOnDesktopTabAndClick()"
});
formatter.result({
  "duration": 833600,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n\tat ✽.When I mouse hover on Desktop tab and Click(DesktopPage.feature:14)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @47089e5f [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:387)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:363)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:311)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:180)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:174)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnShowAllDesktop()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnSortByPositionNameAToZ()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 22
    }
  ],
  "location": "DesktopPageSteps.iSelectProductHPLP(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 59
    }
  ],
  "location": "DesktopPageSteps.iShouldNavigateToProductPageAndShouldSeeTextHPLP(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2023",
      "offset": 23
    },
    {
      "val": "11",
      "offset": 28
    },
    {
      "val": "30",
      "offset": 31
    }
  ],
  "location": "DesktopPageSteps.iSelectDeliveryDate(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnAddToCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 50
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeMessageSuccessYouHaveAddedHPLPToYourShoppingCart(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageSteps.iShouldSeeTextShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnCurrencyTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageSteps.iChangeCurrencyTo£Sterling()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 23
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeTextHPLP(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2023",
      "offset": 31
    },
    {
      "val": "11",
      "offset": 36
    },
    {
      "val": "30",
      "offset": 39
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeTheDeliveryDate(int,int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 30
    }
  ],
  "location": "DesktopPageSteps.iShouldSeeTheModelProduct(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "74",
      "offset": 28
    },
    {
      "val": "73",
      "offset": 31
    }
  ],
  "location": "DesktopPageSteps.iShouldseeTotalPriceIs£(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("LaptopAndNoteBookPage.feature");
formatter.feature({
  "line": 1,
  "name": "Laptop And Notebooks Page Test",
  "description": "",
  "id": "laptop-and-notebooks-page-test",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 13,
  "name": "User should place the order successfully",
  "description": "",
  "id": "laptop-and-notebooks-page-test;user-should-place-the-order-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@smoke"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I Mouse hover on Laptops \u0026 Notebooks Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I Click on Show All Laptops \u0026 Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I Select Sort By Price (High \u003e Low)",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I Select Product MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I should see Product name MacBook",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I Click on Add To Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see message Success: You have added MacBook to your shopping cart!",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I click on link shopping cart display into success message",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on currency tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I change currency to £ sterling",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I should see Shopping Cart",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I should see Product name is MacBook",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Change Quantity to 2",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I click on Update tab",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should see message Success: You have modified your shopping cart!",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I should see the updated price £737.45",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on Checkout button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should see text Checkout",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I should see text New Customer",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I click on Guest Checkout radio button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Continue tab",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I fill all the mandatory details",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I click on Continue",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter Comments about order into text field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I  Click on check the Terms \u0026 Conditions check box",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I Click on Continues",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should see message Warning: Payment method required",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iMouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "duration": 912000,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n\tat ✽.When I Mouse hover on Laptops \u0026 Notebooks Tab and click(LaptopAndNoteBookPage.feature:14)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @47089e5f [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:387)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:363)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:311)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:180)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:174)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iClickOnShowAllLaptopsNotebooks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iSelectSortByPriceHighLow()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iSelectProductMacBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iShouldSeeProductNameMacBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iClickOnAddToCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iShouldSeeMessageSuccessYouHaveAddedMacBookToYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnLinkShoppingCartDisplayIntoSuccessMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageSteps.iClickOnCurrencyTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "DesktopPageSteps.iChangeCurrencyTo£Sterling()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iShouldSeeShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iShouldSeeProductNameIsMacBook()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 21
    }
  ],
  "location": "LaptopAndNoteBooksPageSteps.iChangeQuantityTo(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iClickOnUpdateTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iShouldSeeMessageSuccessYouHaveModifiedYourShoppingCart()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "737",
      "offset": 32
    },
    {
      "val": "45",
      "offset": 36
    }
  ],
  "location": "LaptopAndNoteBooksPageSteps.iShouldSeeTheUpdatedPrice£(int,int)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iClickOnCheckoutButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iShouldSeeTextCheckout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iShouldSeeTextNewCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iClickOnGuestCheckoutRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iClickOnContinueTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iFillAllTheMandatoryDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iClickOnContinue()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iEnterCommentsAboutOrderIntoTextField()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iClickOnCheckTheTermsConditionsCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iClickOnContinues()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iShouldSeeMessageWarningPaymentMethodRequired()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("TopMenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test on HomePage",
  "description": "",
  "id": "top-menu-test-on-homepage",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "I am on Homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 12,
  "name": "User should navigate to Laptop and Notebooks Page Successfully",
  "description": "",
  "id": "top-menu-test-on-homepage;user-should-navigate-to-laptop-and-notebooks-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@smoke"
    },
    {
      "line": 11,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I Mouse hover on Laptops \u0026 Notebooks Tab and click",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Click on Show All Laptops \u0026 Notebooks",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see text Laptops \u0026 Notebooks",
  "keyword": "Then "
});
formatter.match({
  "location": "LaptopAndNoteBooksPageSteps.iMouseHoverOnLaptopsNotebooksTabAndClick()"
});
formatter.result({
  "duration": 2126700,
  "error_message": "java.lang.NoClassDefFoundError: Could not initialize class cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n\tat ✽.When I Mouse hover on Laptops \u0026 Notebooks Tab and click(TopMenu.feature:13)\r\nCaused by: java.lang.ExceptionInInitializerError: Exception java.lang.reflect.InaccessibleObjectException: Unable to make field private final java.util.Comparator java.util.TreeMap.comparator accessible: module java.base does not \"opens java.util\" to unnamed module @47089e5f [in thread \"main\"]\r\n\tat java.base/java.lang.reflect.AccessibleObject.throwInaccessibleObjectException(AccessibleObject.java:387)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:363)\r\n\tat java.base/java.lang.reflect.AccessibleObject.checkCanSetAccessible(AccessibleObject.java:311)\r\n\tat java.base/java.lang.reflect.Field.checkCanSetAccessible(Field.java:180)\r\n\tat java.base/java.lang.reflect.Field.setAccessible(Field.java:174)\r\n\tat cucumber.deps.com.thoughtworks.xstream.core.util.Fields.locate(Fields.java:39)\r\n\tat cucumber.deps.com.thoughtworks.xstream.converters.collections.TreeMapConverter.\u003cclinit\u003e(TreeMapConverter.java:50)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.setupConverters(XStream.java:820)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:574)\r\n\tat cucumber.deps.com.thoughtworks.xstream.XStream.\u003cinit\u003e(XStream.java:530)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams$LocalizedXStream.\u003cinit\u003e(LocalizedXStreams.java:50)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.newXStream(LocalizedXStreams.java:37)\r\n\tat cucumber.runtime.xstream.LocalizedXStreams.get(LocalizedXStreams.java:29)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TopMenuPageSteps.clickOnShowAllLaptopsNotebooks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TopMenuPageSteps.iShouldSeeTextLaptopsNotebooks()"
});
formatter.result({
  "status": "skipped"
});
});